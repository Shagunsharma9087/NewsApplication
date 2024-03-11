function Newsgrid({item})
{
    const websiteUrl=item.url
    const website=websiteUrl.split('https://').pop().split('/')[0];

    const date=item.publishedAt
    const formatdate=date.replace('T',' ')
    const formattime=formatdate.replace('Z',' ')
    return(
        <div id="newsitem" class="data">
            <a id="anchordata" href={item.url} >
                <div id="imageLink">
                    <img scr="./newspaper.jpg"alt={item.title}/>
                </div>
                <div id="data">
                    <div id="title">
                        <h2>{item.title}</h2>
                    </div>
                    <div id="description">
                        <p>{item.description}</p>
                    </div>
                    <div id="Published">
                        <small><b>Published At:</b>{formattime}</small>
                    </div>
                </div>

            </a>
        </div>
    )

}
export default Newsgrid;