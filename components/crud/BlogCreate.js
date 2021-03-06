import Link from 'next/link'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'
import { getCookie, isAuth } from '../../actions/auth'
import { getCategories } from '../../actions/category'
import { getTags } from '../../actions/tag'
import { createBlog } from '../../actions/blog'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import '../../node_modules/react-quill/dist/quill.snow.css'
import { QuillModules, QuillFormats } from '../../helpers/quill'


const CreateBlog = ({ router }) => {

    const blogFromLS = () => {
        if (typeof window === 'undefined') {
            return false
        }

        if (localStorage.getItem('blog')) {
            return JSON.parse(localStorage.getItem('blog'))
        } else {
            return false;
        }
    }

    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])

    const [checked, setChecked] = useState([]) //categories
    const [checkedTag, setCheckedTag] = useState([]) //tags

    const [body, setBody] = useState(blogFromLS())
    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success: '',
        formData: '',
        title: '',
        hidePublishButton: false
    })

    const { error, sizeError, success, formData, title, hidePublishButton } = values;
    const token = getCookie('token')

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }


    useEffect(() => {
        setValues({ ...values, formData: new FormData() })
        initCategories();
        initTags();
    }, [router]);

    const initCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setCategories(data)
            }
        })
    }
    const initTags = () => {
        getTags().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setTags(data)
            }
        })
    }

    const publishBlog = (e) => {
        e.preventDefault()
        // console.log('ready to publish', formData);
        createBlog(formData, token).then(data => {
            //console.log(data);
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({ ...values, title: '', error: '', success: `A new blog title '${data.title}' is created` })
                setBody('')
                setCategories('')
                setTags('')
                setSelectedFile('')
                initCategories();
                initTags();
            }
        })
    }

    const handleChange = name => e => {
        const value = name === 'photo' ? e.target.files[0] : e.target.value
        formData.set(name, value)
        setValues({ ...values, [name]: value, formData: formData, error: '', success: '' })

        name === 'photo' ? onSelectFile(e) : ''

    }

    const handleBody = e => {
        setBody(e)
        setValues({ ...values, error: '', success: '' })
        formData.set('body', e)
        if (typeof window !== 'undefined') {
            localStorage.setItem('blog', JSON.stringify(e))
        }
    }

    const handleToggleCatag = (c) => () => {
        setValues({ ...values, error: '' })
        // return the first index or -1
        const clickedCategory = checked.indexOf(c)
        const allCategory = [...checked]

        if (clickedCategory === -1) {
            allCategory.push(c)
        } else {
            allCategory.splice(clickedCategory, 1)
        }
        // console.log("category", allCategory);
        setChecked(allCategory)
        formData.set('categories', allCategory)
    }

    const handleToggleTag = (t) => () => {
        setValues({ ...values, error: '' })
        // return the first index or -1
        const clickedTag = checked.indexOf(t)
        const allTag = [...checked]

        if (clickedTag === -1) {
            allTag.push(t)
        } else {
            allTag.splice(clickedTag, 1)
        }
        // console.log("Tag", allTag);
        setChecked(allTag)
        formData.set('tags', allTag)
    }

    const showCategories = () => {
        return (
            categories && categories.map((c, i) => (
                <li key={i} className="list-unstyled">
                    <input onChange={handleToggleCatag(c._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">{c.name}</label>
                </li>
            ))
        )
    }

    const showTags = () => {
        return (
            tags && tags.map((t, i) => (
                <li key={i} className="list-unstyled">
                    <input onChange={handleToggleTag(t._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">{t.name}</label>
                </li>
            ))
        )
    }




    const showError = () => (
        error ? toast.error(`${error}`) : ''
    )
    const showSuccess = () => (
        success ? toast.info(`${success}`) : ''
    )

    const createBlogForm = () => {
        return (
            <form onSubmit={publishBlog}>
                <div className="form-group">
                    <label className="text-muted">Title</label>
                    <input type="text" className="form-control" value={title} onChange={handleChange('title')} placeholder="Enter Title" />
                </div>

                <div className="form-group">
                    <ReactQuill modules={QuillModules} formats={QuillFormats} value={body} placeholder="Type something" onChange={handleBody} />
                </div>

                <div>
                    <button className="btn btn-primary" type="submit">Publish</button>
                </div>
            </form>
        )
    }
    return (
        <div className="container-fluid ">
            <div className="imagePreview">
                {selectedFile && <img src={preview} />}
            </div>
            <div className="row">
                <div className="col-12 col-md-8">
                    {createBlogForm()}
                    <div className="px-4">
                        <ToastContainer
                            position="top-right"
                            autoClose={2200}
                            hideProgressBar={false}
                            newestOnTop
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                        {error && showError()}
                        {success && showSuccess()}
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div>
                        <div className="form-group pb-2">
                            <h5>Featured Image</h5>
                            <hr />
                            <small className="text-muted">Max size 1MB</small><br />
                            <label className="btn btn-outline-info my-2">Upload Featured Image
                            <input type="file" accept="image/*" onChange={handleChange('photo')} hidden />
                            </label>
                        </div>
                    </div>
                    <h5>Categories</h5>
                    <hr />
                    <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                        {showCategories()}
                    </ul>
                    <hr />
                    <h5>Tags</h5>
                    <hr />
                    <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                        {showTags()}
                    </ul>
                </div>
            </div>
        </div>
    )
};


export default withRouter(CreateBlog);