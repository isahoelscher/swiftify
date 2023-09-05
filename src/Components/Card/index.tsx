import React, { MouseEvent} from "react";
import styles from "./styles.module.scss";
import { IoReloadCircle } from "react-icons/io5";
import { Tag } from "primereact/tag";

type Card = {
	children: React.ReactNode;
	title: string;
	onClick: () => void;
	button: string;
};

export const Card = ({ children, title, onClick, button }: Card) => {
	return (
		<div className={styles["card-wrapper"]}>
			<h1 className={styles["card-title"]}>{title}</h1>
			<p className={styles["description"]}>{children}</p>
			<button className={styles["reload-button"]} onClick={onClick}>
				<Tag value={button} />
			</button>
		</div>
	);
};
