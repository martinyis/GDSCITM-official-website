import styles from "./gallery.module.css"

export default function Gallery() {
    return (
        <div className={styles.main}>
             <div className={styles.mainHolderTwoItemDesign}>
                    <img src="images/assets/readmeImages/gallery.png" alt="dot green" />
                </div>
            <div className={styles.mainHolder}>
                <div className={styles.mainHolderOne}>
                    <div className={styles.mainHolderOneItem}>
                        <div className={styles.mainHolderOneItemHeader}>
                            <p style={{ background: "#FE2C25" }}></p>
                            <p style={{ background: "#2785FC" }}></p>
                            <p style={{ background: "#FBBC12" }}></p>
                        </div>
                        <div className={styles.mainHolderOneItemContainer}>
                            <img src="images/gallery/2.jpeg" alt="test" />
                            <img src="images/gallery/1.jpeg" alt="test" />
                            <img src="images/gallery/2.jpeg" alt="test" />
                            <img src="images/gallery/1.jpeg" alt="test" />
                            <img src="images/gallery/2.jpeg" alt="test" />
                            <img src="images/gallery/1.jpeg" alt="test" />
                            <img src="images/gallery/2.jpeg" alt="test" />
                            <img src="images/gallery/1.jpeg" alt="test" />
                        </div>
                    </div>
                </div>
                <div className={styles.mainHolderTwo}>
                    <div className={styles.mainHolderTwoItem}>
                        <div className={styles.mainHolderTwoItemHeading}>
                            <h2>GDSC ITM</h2>
                            <p>Beginning of infinity</p>
                        </div>
                        <div className={styles.mainHolderTwoItemContainer}>
                            <p>GDSC's primary aim lies in empowering students with development skills and other technical abilities for growth and advancement. We believe in innovation and evolution. For students to grow their skills to tackle problems and to bring about change.
                                <br />
                                <br />
                                The club is intended as a space for students to try out new ideas and collaborate to solve.</p>
                        </div>

                    </div>

                </div>
                
            </div>
           
        </div>
    )
}
