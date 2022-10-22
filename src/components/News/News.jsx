import React, { useContext, useState } from 'react';
import "./News.css";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Link, useLoaderData } from 'react-router-dom';
import { userContex } from '../../App';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const useStyles = makeStyles((theme) => ({
    root: {
        height: "80vh",
        justifyContent: "space-between",
        alignItems: "center"
    },
    rigthSide: {
        width: 500
    },
    header: {
        backgroundColor: "#343a4017",
        color: "white",
        fontSize: "3rem",
    },
    img: {
        height: 400,
        width: "100%",
        borderRadius: 20
    },
    details: {
        backgroundColor: "#343a4017",
        color: "white",
        width: "50%"
    },
    btn: {
        marginTop: "20px"
    }

}));

const News = () => {

    const travelPlace = useLoaderData();
    console.log(travelPlace);
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = travelPlace.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const { contexData, setContexData } = useContext(userContex)

    const bookingHandle = (lav) => {
        let prev = { ...contexData }
        prev = {
            destination: lav,
            details: travelPlace[activeStep].details,
            image: travelPlace[activeStep].imgPath,
        }
        setContexData(prev);
    }

    return (
        <div className="container">
            <div className={`${classes.root} row`}>
                <div className="col-lg-6">
                    <div><Paper square elevation={0} className={classes.header}>
                        <h1>{travelPlace[activeStep].label}</h1>
                    </Paper></div>

                    <div className='details'>
                        <Paper square elevation={0} className={classes.details}>
                            <Typography>{travelPlace[activeStep].details.slice(0, 100)}...</Typography>
                        </Paper>
                    </div>
                    {
                        <div className={classes.btn}>
                            <Link to="/info">
                                <button className="bookingbtn" onClick={() => bookingHandle(travelPlace[activeStep].label)}>
                                    {travelPlace[activeStep].button}
                                </button>
                            </Link>
                        </div>
                    }


                </div>
                <div className="col-lg-6">
                    <div className="">

                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {travelPlace.map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <img className={classes.img} src={step.imgPath} alt={step.label} />
                                    ) : null}
                                </div>

                            ))}
                        </AutoPlaySwipeableViews>
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            variant="text"
                            activeStep={activeStep}
                            nextButton={
                                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                </Button>
                            }
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default News;