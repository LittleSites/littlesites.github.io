import Link from "next/link";
import style from "./styles/template_1.module.css"

export const StaticTemplate = ({ values }) => {
	const texts = values.texts;
	const images = values.images;
	const socialLinks = JSON.parse(texts.socialLinks);

  	console.log(texts);
  	console.log(images);
	console.log(socialLinks);

  	return (
		<header className={style.header}>
			<section>
				<img
					alt='logo'
					className={style.logo}
					src={images.logo}
				/>
			</section>
			<section className={style.tagsSection}>
				{Object.values(JSON.parse(texts.tags)).map((tag, index) => {
					return (
						<Link 
							key={index} 
							className={style.headerTag}
							href={tag.value}
						>
							{tag.title}
						</Link>
					);
				})}
			</section>
			<section>
				<Link
					href={socialLinks.facebook}
				>
					<img
						alt='facebook-link'
						className={style.socialLink}
						src='https://img.icons8.com/ios-filled/100/facebook-new.png'
					/>
				</Link>

				<Link
					href={socialLinks.twitter}
				>
					<img
						alt='twitter-link'
						className={style.socialLink}
						src='https://img.icons8.com/ios-filled/100/twitterx--v2.png'
					/>
				</Link>

				<Link
					href={socialLinks.instagram}
				>
					<img
						alt='instagram-link'
						className={style.socialLink}
						src='https://img.icons8.com/ios-filled/100/instagram-new--v1.png'
					/>
				</Link>
			</section>
		</header>
  	);
};
