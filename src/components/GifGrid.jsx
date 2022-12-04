import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

import '../styles.css';

export function GifGrid({ category, onDeleteCategory }) {

	const { images, isLoading } = useFetchGifs(category);
	return (
		<>
			<div className="titulo">
				<span>{category.nombre}</span>
				<button
					onClick={() => onDeleteCategory(category)}
				>Eliminar</button>
			</div>
			{
				isLoading && <h2>Cargando...</h2>
			}

			<div className="card-grid">
				{
					images.map((image) => (
						<GifItem
							key={image.id}
							{...image}
						/>
					))
				}
			</div>

		</>
	);
}
