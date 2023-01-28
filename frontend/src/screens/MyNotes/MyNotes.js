import React, { useEffect, useState } from 'react';
import { Accordion, Badge, Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainScreen from '../../components/MainScreen';
import axios from 'axios';

const MyNotes = () => {
    const [notes, setNotes] = useState([]);

    const deleteHandler = (id) => {
        if (window.confirm("Are You sure?")) {
            console.log(`Deleted notes ID : ${id}`);
            var element = document.getElementById(id) ;
            console.log(element);
            element.parentElement.removeChild(element);
        }
    };
    const fetchNotes = async()=>{
        const { data } = await axios.get("/api/notes");
        setNotes(data) ;  
    };

    // const show= async(id)=>{
    //     const {data} = await axios.get(`/api/notes/${id}`)
    //     console.log(data._id)
    // }
    // console.log(notes) ;

    useEffect(() => {
        // show();
        fetchNotes() ;   
        // show() ;
    }, []);
    
    return (

        <MainScreen title="Welcome back.....">
            <Link to="/createnote">
                <Button style={{ marginLeft: 10, marginRight: 6 }} size="lg">Create new Note</Button>
            </Link>
            {
                notes.map((note) => (
                    <Accordion key={note._id} id = {note._id}>
                        <Accordion.Item eventKey="0" >
                        <Card style={{ margin: 10 }}>
                            <Card.Header style={{ display: "flex", border:"none"}} >
                                <span style={{
                                    color: "black",
                                    textDecoration: "none",
                                    flex: 1,
                                    cursor: "pointer",
                                    fontSize: 18,
                                    
                                }}
                                >
                                    <Accordion.Header style={{border:"none !important"}} as={Card.Text} variant='link' > {note.title}</Accordion.Header>
                                   
                                    
                                    </span>

                                <div>
                                    <Button href={`/note/${note._id}`}  > Edit</Button>
                                    <Button variant='danger' className="mx-2"
                                        onClick={() => deleteHandler(note._id)}
                                    >Delete</Button>
                                </div>
                            </Card.Header>
                            <Accordion.Body eventKey="0">
                            <Card.Body>
                                <h4>
                                    <Badge variant='success' bg='success'>
                                        Category - {note.category}
                                    </Badge>
                                </h4>

                                <blockquote className="blockquote mb-0">
                                    <p>
                                        {note.content}
                                    </p>
                                    <footer className="blockquote-footer">
                                        <cite>{Date().substring(0, 24)}</cite>

                                    </footer>
                                </blockquote>
                            </Card.Body>
                            </Accordion.Body>
                            
                        </Card>
                        </Accordion.Item>
                    </Accordion>
                ))
            }


        </MainScreen>

    )
}

export default MyNotes