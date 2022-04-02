import styles from "./Image.module.css"

let Image = (props) => {
    return (
        <div className={styles.quesImg}  style={{backgroundImage: `url(${props.src})`}}>
        </div>
        )
}

export default Image;