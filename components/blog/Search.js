import React from 'react'
import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { listSearch } from '../../actions/blog';
import { API } from '../../config'

const Search = () => {
    const [values, setValues] = useState({
        search: undefined,
        results: [],
        searched: false,
        message: ''
    });

    const { search, results, searched, message } = values;

    const searchSubmit = e => {
        e.preventDefault();
        listSearch({ search }).then(data => {
            console.log(data);
            setValues({ ...values, results: data, searched: true, message: `${data.length} blogs found` });
        });
    };

    const handleChange = e => {
        // console.log(e.target.value);
        setValues({ ...values, search: e.target.value, searched: false, results: [] });


        // if (e.target.value = "") {
        //     setValues({ ...values, results: [] })
        // } else {
        //     setValues({ ...values, search: e.target.value, searched: false, results: [] });

        // }

    };

    // const mouseMoveHandler = () => {
    //     setValues({ ...values, searched: false });
    // }

    const searchedBlogs = (results = []) => {
        return (
            <div className="searchBg">
                {message && <p className=" text-muted font-italic">{message}</p>}

                {results.map((blog, i) => {
                    return (
                        <div className="searchTab" key={i}>
                            <img src={`${API}/blog/photo/${blog.slug}`} alt="blogImg" style={{ height: '3rem', width: '3rem', borderRadius: '50%', marginRight: '15px' }} />
                            <Link href={`/blogs/${blog.slug}`}>
                                <a className="text-primary">{blog.title}</a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    };

    const searchForm = () => (
        <form onSubmit={searchSubmit}  >
            {/* <div className="row">
                <div className="col-md-8">
                    <input type="search" className="form-control" placeholder="Search blogs" onChange={handleChange} />
                </div>
                <div className="col-md-4">
                    <button className="btn btn-block btn-outline-primary" type="submit">
                        Search
                    </button>
                </div>
            </div> */}

            <div className="searchContainer">
                <input type="search" className="form-control" placeholder="Search blogs" onChange={handleChange} />
                <button className="searchBtn" type="submit"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                </svg></button>
            </div>

        </form>
    );

    return (
        <React.Fragment>
            <div >{searchForm()}</div>
            {searched && <div style={{ position: 'absolute', top: '100%' }}>{searchedBlogs(results)}</div>}
        </React.Fragment>

    );
};

export default Search;