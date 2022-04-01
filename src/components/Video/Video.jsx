import './video.css'

function Video({link,width, height }) {
    return (
        <div className="media">
           <iframe width={width} height={height} src={link} title="Vídeo institucional Golden Path" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export {Video}