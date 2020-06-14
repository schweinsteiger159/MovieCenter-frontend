import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 300,
    },
});

export default function MediaCard(movie) {
    const classes = useStyles();
    console.log(movie)
    var item = movie.movie
    return (
        <Card className={classes.root}>
            <Link to={"/detail/" + item.codeFilm}>
                <CardActionArea>

                    <CardMedia
                        className={classes.media}
                        image={item.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.namefilm}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {(item.description) ? item.description.substring(0, 50) : ""}...
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>

            <CardActions>
                <div className="rating_days d-flex justify-content-between">
                    <span className="d-flex justify-content-center align-items-center">
                        <a href="#">(20 Review)</a>
                    </span>
                    <div className="days">
                        <i className="fa fa-clock-o" />
                        <a href="#">5 Days</a>
                    </div>
                </div>
            </CardActions>
        </Card>
    );
}
