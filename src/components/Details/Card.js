import React from 'react';
import "./Details.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import star from "../../Icon/star_1_.png"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: 125,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        height: 125
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    text: {
        fontSize: 14
    }
}));



const Cards = (props) => {
    const { image, headres, bodys, facilities, other, stars, price } = props.detail
    console.log(props.detail)
    const classes = useStyles();
    // const theme = useTheme();
    return (
        <div className="mb-2 bac">
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live "
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography className="head">
                            {headres}
                        </Typography>
                        <Typography className={classes.text} color="textSecondary">
                            {bodys}
                        </Typography>
                        <Typography className={classes.text} color="textSecondary">
                            {facilities}
                        </Typography>
                        <Typography className={classes.text} color="textSecondary">
                            {other}
                        </Typography>
                        <Typography className={classes.text} color="textSecondary">
                            <img className="star" src={star} alt="star not found" /> {stars}
                            <span className="price">${price}/night</span>
                        </Typography>
                    </CardContent>

                </div>

            </Card>
        </div>
    );
};

export default Cards;