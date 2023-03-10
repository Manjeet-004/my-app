import React from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

export default function AdvancedSearch() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitForm = (data) => {
        let queryString = "searchBy=true";
        if (data.geoLocation) queryString += `&geoLocation=${data.geoLocation}`;
        if (data.medium) queryString += `&medium=${data.medium}`;
        queryString += `&isOnView=${data.isOnView}`;
        queryString += `&isHighlight=${data.isHighlight}`;
        queryString += `&q=${data.q}`;
        router.push(`/artwork?${queryString}`);
    };

    return (
            <Form onSubmit={handleSubmit(submitForm)}>
                <Form.Group controlId="searchBy">
                    <Form.Label>Search By</Form.Label>
                    <Form.Control as="select" name="searchBy" >
                        <option value="title">Title</option>
                        <option value="artist">Artist</option>
                        <option value="tag">Tag</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="geoLocation">
                    <Form.Label>Geo Location</Form.Label>
                    {/* <Form.Control type="text" name="geoLocation" ref={register} /> */}
                </Form.Group>
                <Form.Group controlId="medium">
                    <Form.Label>Medium</Form.Label>
                    {/* <Form.Control type="text" name="medium" ref={register} /> */}
                </Form.Group>
                <Form.Group controlId="isOnView">
                    <Form.Check
                        type="checkbox"
                        name="isOnView"
                        label="Is On View"
                        // ref={register}
                    />
                </Form.Group>
                <Form.Group controlId="isHighlight">
                    <Form.Check
                        type="checkbox"
                        name="isHighlight"
                        label="Is Highlight"
                        // ref={register}
                    />
                </Form.Group>
                {/* <Form.Group controlId="q">
                    <Form.Label>Keyword</Form.Label>
                    <Form.Control type="text" name="q" ref={register({ required: true })} className={errors.q ? "is-invalid" : ""} />
                    {errors.q && <div className="invalid-feedback">This field is required</div>}
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    );
}
