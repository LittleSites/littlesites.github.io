import { Draggable } from '@hello-pangea/dnd';
import { DeleteComponentButton } from '../../../Shared/deleteComponent';
import style from "./styles/template_1.module.css";
import { fireAddNavTagAlert } from '@/libs/misc/alerts/editorAlerts/addNavTagAlert';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { fireAddSocialLinkAlert } from '@/libs/misc/alerts/editorAlerts/addSocialLinkAlert';

export const props = {
	unique: true,
	inputs_number: 0,
};

export const InputTemplate = ({ item, index, state, setState }) => {
	const logoInputRef = useRef();
	const logoImageRef = useRef();

	const router = useRouter();
	const [tags] = useState([]);
	const [socialLinks] = useState({
		facebook: "",
		twitter: "",
		instagram: ""
	});

	const addNavTag = async (event) => {
		event.preventDefault();

		const newTag = await fireAddNavTagAlert();

		if (
			newTag != undefined 
			&& newTag.title != "" 
			&& newTag.value != "" 
		) {
			tags.push(newTag);
			router.refresh();
		}
	}

	const renderImage = (event) => {
		event.preventDefault();

        const logo = event.target.files[0];

		if (logo) {
            const fileReader = new FileReader();

            fileReader.onload = (evento) => {
                const urlTemporal = evento.target.result;
                logoImageRef.current.src = urlTemporal;
            };

            fileReader.readAsDataURL(logo);
        }
	}

	const modifyLogo = () => {
		logoInputRef.current.click();
	}

	const addSocialLink = async (socialNetwork) => {
		const link = await fireAddSocialLinkAlert();

		if (link != undefined && link != "") {
			socialLinks[socialNetwork] = link;
			router.refresh();
		}
	}

  	return (
		<Draggable draggableId={item.id} index={index}>
			{(provided) => (
				<div
					className='editor_component'
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					id={item.id}
				>
					<DeleteComponentButton index={index} setState={setState} state={state} />

					<input type="hidden" name="tags" value={JSON.stringify(tags)}/>
					<input type="hidden" name="socialLinks" value={JSON.stringify(socialLinks)}/>

					<header className={style.header}>
						<section>
							<input 
								ref={logoInputRef}
								type="file"
								name="logo"
								style={{display: "none"}}
								onChange={renderImage}
							/>
							<img
								ref={logoImageRef}
								alt="logo"
								className={style.logo}
								src='https://img.icons8.com/windows/100/hips-logo.png'
								onClick={modifyLogo}
								// src='https://c1.klipartz.com/pngpicture/714/258/sticker-png-logo-text-falabella-saci-falabella-typography-logos-green-line.png'
							/>
						</section>
						<section
							className={style.tagsSection}
						>
							<button
								className={style.addTagButton}
								onClick={addNavTag}
							>
								+
							</button>

							{Object.values(tags).map( ( tag, index ) => {
								return (
									<div key={index}>
										<Link
											key={`link-${index}`}
											className={style.headerTag}
											href={tag.value}
										>
											{tag.title}
										</Link>
									</div>
								);
							})}
						</section>
						<section>
							<img 
								onClick={() => addSocialLink("facebook")}
								alt="facebook-link"
								className={style.socialLink}
								src="https://img.icons8.com/ios-filled/100/facebook-new.png"
							/>
							<img
								onClick={() => addSocialLink("twitter")}
								alt="twitter-link"
								className={style.socialLink}
								src="https://img.icons8.com/ios-filled/100/twitterx--v2.png"
							/>
							<img
								onClick={() => addSocialLink("instagram")}
								alt="instagram-link"
								className={style.socialLink}
								src="https://img.icons8.com/ios-filled/100/instagram-new--v1.png"
							/>
						</section>
					</header>
				</div>
			)}
		</Draggable>
  	);
};
