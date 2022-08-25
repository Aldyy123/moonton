import React, { useEffect } from "react"
import Authenticated from "@/Layouts/Authenticated/index"
import { Head, Link, useForm } from '@inertiajs/inertia-react'
import Input from "@/Components/Input";
import ValidationErrors from '@/Components/ValidationErrors';
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        slug: '',
        category: '',
        video_url: '',
        thumbnail: '',
        rating: '',
        is_featured: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'file' ? event.target.files[0] : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.dashboard.movie.store'));
    };

    return (
        <>
            <Head title="Admin - Create a Movie" />
            <Authenticated auth={auth}>
                <Link href={route('admin.dashboard.movie.index')} className="bg-alerange p-2 rounded-md text-white">
                    Kembali
                </Link>
                <h2 className="text-center font-bold text-xl">Create New Movie</h2>
                <hr className="mb-4" />
                <ValidationErrors errors={errors} />
                <form onSubmit={submit} encType="multipart/form-data">
                    <div className="w-full flex justify-around flex-wrap">
                        <div className="w-5/12 my-2">
                            <Label forInput={'name'} value="Name Movie" />
                            <Input type="text"
                                variant="primary-outline"
                                placeholder="Insert name movie..."
                                value={data.name}
                                name="name"
                                isError={errors.name}
                                handleChange={onHandleChange}
                            />
                        </div>
                        <div className="w-5/12 my-2">
                            <Label forInput={'category'} value="Category" />
                            <Input type="text"
                                variant="primary-outline"
                                placeholder="Insert Category Movie..."
                                value={data.category}
                                name="category"
                                isError={errors.category}
                                handleChange={onHandleChange}
                            />
                        </div>
                        <div className="w-5/12 my-2">
                            <Label forInput={'video_url'} value="Video URL" />
                            <Input type="text"
                                variant="primary-outline"
                                placeholder="Insert Video URL..."
                                value={data.video_url}
                                name="video_url"
                                isError={errors.video_url}
                                handleChange={onHandleChange}
                            />
                        </div>
                        <div className="w-5/12 my-2">
                            <Label forInput={'rating'} value="Rating" />
                            <Input type="number"
                                variant="primary-outline"
                                value={data.rating}
                                name="rating"
                                isError={errors.rating}
                                handleChange={onHandleChange}
                            />
                        </div>
                        <div className="w-11/12 my-2">
                            <Label forInput={'thumbnail'} value="Thumbnail" />
                            <Input type="file"
                                variant="primary-outline"
                                name="thumbnail"
                                isError={errors.thumbnail}
                                handleChange={onHandleChange}
                            />
                        </div>
                        <div className="w-11/12 my-2 flex items-center gap-2 flex-row-reverse justify-end">
                            <Label forInput={'is_featured'} value="Is Featured" className={'mt-2'} />
                            <Checkbox
                                name={'is_featured'}
                                handleChange={(e) => setData('is_featured', e.target.checked)}
                            />
                        </div>
                        <Button processing={processing} type="submit">
                            Submit
                        </Button>
                    </div>
                </form>
            </Authenticated>
        </>
    )
}