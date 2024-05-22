import { Draggable } from '@hello-pangea/dnd';
import { DeleteComponentButton } from '../../../Shared/deleteComponent';
import style from "./styles/template_1.module.css"
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export const props = {
	unique: false,
	inputs_number: 0,
};

export const InputTemplate = ({ item, index, state, setState }) => {
    const router = useRouter();
    const [optionSelected, setOptionSelected] = useState(1);

    const imagesInputRefs = {
        imageOneRef: useRef(),
        imageTwoRef: useRef(),
        imageThreeRef: useRef(),
    }

    const [carouselImagesUrls] = useState({
        imageUrlOne: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_956,w_2232,c_fit,f_auto,q_auto:best/About-Us-Power-Vehicle-Desktop-Global",
        imageUrlTwo: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_956,w_2232,c_fit,f_auto,q_auto:best/About-Us-Power-Vehicle-Desktop-Global",
        imageUrlThree: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_956,w_2232,c_fit,f_auto,q_auto:best/About-Us-Power-Vehicle-Desktop-Global"
    })

    const renderImage = (event, imageNumber) => {
		event.preventDefault();

        const logo = event.target.files[0];

		if (logo) {
            const fileReader = new FileReader();

            fileReader.onload = (evento) => {
                const urlTemporal = evento.target.result;
                carouselImagesUrls[imageNumber] = urlTemporal;
                router.refresh();
            };

            fileReader.readAsDataURL(logo);
        }
	}

	const modifyCarouselImage = (event, imageRef) => {
        event.preventDefault();
        imagesInputRefs[imageRef].current.click();
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

                    <input
                        ref={imagesInputRefs.imageOneRef}
                        type='file'
                        onChange={(event) => renderImage(event, "imageUrlOne")}
                        style={{display: "none"}}
                        name='imageUrlOne'
                    />

                    <input
                        ref={imagesInputRefs.imageTwoRef}
                        type='file'
                        onChange={(event) => renderImage(event, "imageUrlTwo")}
                        style={{display: "none"}}
                        name='imageUrlTwo'
                    />

                    <input
                        ref={imagesInputRefs.imageThreeRef}
                        type='file'
                        onChange={(event) => renderImage(event, "imageUrlThree")}
                        style={{display: "none"}}
                        name='imageUrlThree'
                    />

                    <section
                        className={style.carouselMain}
                    >   
                        {optionSelected === 1 && 
                            <div
                                className={style.carouselImgInput}
                                style={{backgroundImage: `url("${carouselImagesUrls.imageUrlOne}")`}}
                            >
                                <button
                                    className={style.addImageButton}
                                    onClick={(event) => modifyCarouselImage(event, "imageOneRef")}
                                >
                                    +
                                </button>
                            </div>
                        }
                        {optionSelected === 2 && 
                            <div
                                className={style.carouselImgInput}
                                style={{backgroundImage: `url("${carouselImagesUrls.imageUrlTwo}")`}}
                            >
                                <button
                                    className={style.addImageButton}
                                    onClick={(event) => modifyCarouselImage(event, "imageTwoRef")}
                                >
                                    +
                                </button>
                            </div>
                        }
                        {optionSelected === 3 && 
                            <div
                                className={style.carouselImgInput}
                                style={{backgroundImage: `url("${carouselImagesUrls.imageUrlThree}")`}}
                            >
                                <button
                                    className={style.addImageButton}
                                    onClick={(event) => modifyCarouselImage(event, "imageThreeRef")}
                                >
                                    +
                                </button>
                            </div>
                        }
                        {/* <img
                            className={style.carouselImg}
                            alt="carouselImg"
                            src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_956,w_2232,c_fit,f_auto,q_auto:best/About-Us-Power-Vehicle-Desktop-Global"
                        /> */}
                        <section 
                            className={style.carouselSelector}
                        >
                            <div
                                className={style.option}
                                onClick={() => setOptionSelected(1)}
                            >
                                <div className={style.optionLine} />
                                <input
                                    className={style.titleInput}
                                    type='text' 
                                    placeholder="Producto 1"
                                    name='titleOne'
                                />
                                {/* <p className={style.title}>Producto 1</p> */}
                                <textarea 
                                    className={style.descriptionInput}
                                    placeholder="Description del producto, puedes dar la mejor imprecion con una buena descripcion"
                                    name='descOne'
                                />
                                {/* <p className={style.description}>Description del producto, puedes dar la mejor imprecion con una buena descripcion</p> */}
                            </div>
                            <div
                                className={style.option}
                                onClick={() => setOptionSelected(2)}

                            >
                                <div className={style.optionLine} />
                                <input
                                    className={style.titleInput}
                                    type='text' 
                                    placeholder="Producto 2"
                                    name='titleTwo'
                                />
                                <textarea 
                                    className={style.descriptionInput}
                                    placeholder="Description del producto, puedes dar la mejor imprecion con una buena descripcion"
                                    name='descTwo'
                                />
                            </div>
                            <div
                                className={style.option}
                                onClick={() => setOptionSelected(3)}

                            >
                                <div className={style.optionLine} />
                                <input
                                    className={style.titleInput}
                                    type='text' 
                                    placeholder="Producto 3"
                                    name='titleThree'
                                />
                                <textarea 
                                    className={style.descriptionInput}
                                    placeholder="Description del producto, puedes dar la mejor imprecion con una buena descripcion"
                                    name='descThree'
                                />
                            </div>
                        </section>
                    </section>
				</div>
			)}
		</Draggable>
  	);
};