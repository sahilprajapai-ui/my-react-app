function MyThumbnail() {
    const styles = {
        height: '100px',
        width: "150px",
        background: "linear-gradient(90deg, rgba(5,0,97,.8) 0%, rgba(9,9,121,.8) 35%, rgba(0,212,255,.8) 100%)",

        borderRadius: "6px",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',        
    }
    return <div className='thumbnail' style={styles}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1C274C"/>
            <path d="M15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868V9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059Z" fill="#1C274C"/>
            </svg>
    </div>
}

export default MyThumbnail;