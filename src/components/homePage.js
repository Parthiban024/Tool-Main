import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import Box from "@mui/material/Box";
import { CardMedia } from '@mui/material';
import TextField from "@mui/material/TextField";
import Navbar from "./navbarPage"
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';

const DashboardPage = () => {
    const navigate = useNavigate();

    const handleTicketButtonClick = () => {
        navigate('/form');
    };
    const handleTicketButtonClickTwo = () => {
        navigate('/dashboard');
    };

    return (
        <div className="">
            <Navbar />
            <div className="hm_sec_2 d-flex justify-content-center align-items-center">
                <h1>Hi, how can we help you?</h1>
            </div>
            <div className="hm_sec_3">
                <div className="d-flex card_hm justify-content-center align-items-center">
                    <CardGroup>
                        <Card className="card_one">
                            <Card.Body>
                                <Card.Title className="text-center">
                                    Submit a ticket
                                </Card.Title>
                                <p className="text-center">(User's Only)</p>
                                <Card.Text className="text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Card.Text>
                                <div className="d-flex justify-content-center ">
                                    <a className="btn btn-primary btn_hm" onClick={handleTicketButtonClick}>Rise a ticket</a>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="card_two">
                            <Card.Body>
                                <Card.Title className="text-center">View all tickets</Card.Title>
                                <p className="text-center">(Admin's Only)</p>
                                <Card.Text className="text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Card.Text>
                                <div className="d-flex justify-content-center">
                                    <a className="btn btn-primary btn_hm" onClick={handleTicketButtonClickTwo}>Ticket list</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;