import MyThumbnail from "./thumbnail"
import LikeBtn from "./likeBtn";
function MyCard({vt,vd}) {
    const styles = {
        padding: '10px',
        paddingRight : "20px",
        display: 'flex',
        alignItems: 'center',
        width: "600px",
        justifyContent: 'space-between',
        backgroundColor: "#f0f9f0",
        borderRadius: "10px",
        border : "2px solid #d9d9ff"
    }

    const styles2 = {
        textAlign: 'start',
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
        paddingLeft: '20px',
        height: "100px",
    }

    return <div style={styles}>
        <MyThumbnail /> 
        <div style={styles2} >
            <h1>{vt}</h1>
            <p>{vd}</p>
        </div>
        <LikeBtn />
    </div>
}

export default MyCard;  