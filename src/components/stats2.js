import React from "react"
import Slider from "@material-ui/core/Slider"
import Typography from "@material-ui/core/Typography"

export default ({stats}) => {
    const stat = stats.map(stat => stat.base_stat)
    const valorMax = Math.max(...stat)
    return(
        <div>
        {
            stats.map(stat =>
            <div key={stat.stat.name}>
                <Typography id="discrete-slider-always" gutterBottom style={{textTransform:"capitalize"}}>
                {stat.stat.name}
                </Typography>
                <Slider
                defaultValue={stat.base_stat}
                aria-labelledby="discrete-slider-always"
                step={10}
                max={valorMax+10}
                valueLabelDisplay="on"
                />
            </div>   
            )
        }
        
            
        </div>
    )
}