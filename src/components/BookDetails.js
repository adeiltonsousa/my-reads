import React from 'react';
import { Dialog, DialogTitle, Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

function BookDetail(props) {
    return (
        <Dialog 
            open={props.book !== null} 
            onClose={props.onClose}
            aria-labelledby="book-dialog"
        >
            {props.book && (
                <Grid item xs={12}>
                    <DialogTitle id="book-dialog">{props.book.title}</DialogTitle>
                    <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                        <div
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url("${props.book.imageLinks ? props.book.imageLinks.thumbnail : ''}")`
                            }}
                        ></div>
                        {props.book.averageRating && (
                            <div style={{ marginTop: '10px' }}>
                                {Array.from({length: 5}, (x, i) => i).map((e, i) => (
                                    <StarIcon 
                                        style={{ color: i < props.book.averageRating ? '#ffcc00' : '#f0f0f5' }} 
                                    />
                                ))}
                            </div>
                        )}
                        {props.book.authors && (
                            <p>Authors: {props.book.authors.join(', ')}</p>
                        )}
                        {props.book.publisher && (
                            <p>Publisher: {props.book.publisher}</p>
                        )}
                        {props.book.publishedDate && (
                            <p>Publish date: {props.book.publishedDate}</p>
                        )}
                        {props.book.pageCount && (
                            <p>Pages: {props.book.pageCount}</p>
                        )}
                        {props.book.description && (
                            <div>
                                <label>Description:</label>
                                <p>{props.book.description}</p>
                            </div>
                        )}
                    </div>
                </Grid>
            )}
        </Dialog>
    )
}

export default BookDetail