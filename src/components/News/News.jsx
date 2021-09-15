import React, { useContext, useState } from 'react';
import "./News.css"
import Image1 from "../../Image/Rectangle1.png";
import Image2 from "../../Image/Sreemongol.png";
import Image3 from "../../Image/sundorbon.png";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Link } from 'react-router-dom';
import { userContex } from '../../App';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: "COX'S BAZAR",
        details: "The name Cox's Bazar originated from the name of a British East India Company officer, Captain Hiram Cox, who was appointed as the Superintendent of Palonki (today's Cox's Bazar) outpost. He succeeded Warren Hastings,",
        imgPath:Image1,
        button: "Booking ->"
    },
    {
        label: 'SREEMANGOL',
        details: "Madhobpur Lake is one of the main tourist attractions in the area,[3][4][5] and is home to the Great White-Bellied Heron, the only confirmed site in Bangladesh",
        imgPath:Image2,
        button: "Booking ->"
    },
    {
        label: 'SUNDORBAN',
        details: "Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal.",
        imgPath:Image3,
        button: "Booking ->"
    }
   
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 350,
        flexGrow: 1,
        marginLeft: 280
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 60,
        paddingLeft: theme.spacing(4),
        backgroundColor: "#343a4017",
        color: "white",
        fontSize: "3rem"
    },
    img: {
        height: 300,
        display: 'block',
        maxWidth: 600,
        // overflow: 'hidden',
        width: '100%',
        borderRadius: 20
    },
    details:{
        // display: 'flex',
        // alignItems: 'center',
        height: 10,
        paddingLeft: theme.spacing(4),
        backgroundColor: "#343a4017",
        color: "white",
    },
   
}));

const News = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const [gohobbor, setgohobbor]= useContext(userContex)
    // const [book, setBook] = useState(true)
 
    const bookingHandle=(lav)=>{
       setgohobbor({
           name: lav,
           details: tutorialSteps[activeStep].details,
           image: tutorialSteps[activeStep].imgPath,
           userName:"",
           email:"",
           password:""
       })
    }
 
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div><Paper square elevation={0} className={classes.header}>
                        <h1>{tutorialSteps[activeStep].label}</h1>
                    </Paper></div>

                    <div>
                        <Paper square elevation={0} className={classes.details}>
                            <Typography>{tutorialSteps[activeStep].details}</Typography>
                        </Paper>
                    </div>
                    
                   {
                        <div className="bt">
                            <Link to="/info">
                            <button className="bookingbtn" onClick={() => bookingHandle(tutorialSteps[activeStep].label)}>
                                {tutorialSteps[activeStep].button}
                            </button>
                            </Link>
                        </div>
                        
                   }

                </div>
                <div className="col-lg-8">
                    <div className={classes.root}>

                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {tutorialSteps.map((step, index) => (
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