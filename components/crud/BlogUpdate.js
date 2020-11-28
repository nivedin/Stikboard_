import Link from 'next/link'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'
import { getCookie, isAuth } from '../../actions/auth'
import { getCategories } from '../../actions/category'
import { getTags } from '../../actions/tag'
import { singleBlog, updateBlog } from '../../actions/blog'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import '../../node_modules/react-quill/dist/quill.snow.css'
import { QuillModules, QuillFormats } from '../../helpers/quill'
import { API } from '../../config'

const BlogUpdate = ({ router }) => {

    const [body, setBody] = useState('')

    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])

    const [checked, setChecked] = useState([]) //categories
    const [checkedTag, setCheckedTag] = useState([]) //tags

    const [values, setValues] = useState({
        title: '',
        error: '',
        success: '',
        formData: '',
        title: '',
        body: ''
    })

    const { error, success, formData, title } = values;
    const token = getCookie('token')


    useEffect(() => {
        setValues({ ...values, formData: new FormData() });
        initBlog();
        initCategories();
        initTags();
    }, [router]);

    const initBlog = () => {
        if (router.query.slug) {
            singleBlog(router.query.slug).then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setValues({ ...values, title: data.title })
                    setBody(data.body)
                    setCategoriesArray(data.categories)
                    setTagsArray(data.tags)
                }
            })
        }
    };

    const setCategoriesArray = blogCategories => {
        let ca = []
        blogCategories.map((c, i) => {
            ca.push(c._id)
        })
        setChecked(ca)

    }
    const setTagsArray = blogTags => {
        let ta = []
        blogTags.map((t, i) => {
            ta.push(t._id)
        })
        setCheckedTag(ta)

    }

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
        const clickedTag = checkedTag.indexOf(t)
        const allTag = [...checkedTag]

        if (clickedTag === -1) {
            allTag.push(t)
        } else {
            allTag.splice(clickedTag, 1)
        }
        // console.log("Tag", allTag);
        setCheckedTag(allTag)
        formData.set('tags', allTag)
    }

    const findOutCategory = c => {
        const result = checked.indexOf(c)
        if (result !== -1) {
            return true
        } else {
            return false
        }
    }
    const findOutTag = t => {
        const result = checkedTag.indexOf(t)
        if (result !== -1) {
            return true
        } else {
            return false
        }
    }

    const showCategories = () => {
        return (
            categories && categories.map((c, i) => (
                <li key={i} className="list-unstyled">
                    <input onChange={handleToggleCatag(c._id)} checked={findOutCategory(c._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">{c.name}</label>
                </li>
            ))
        )
    }

    const showTags = () => {
        return (
            tags && tags.map((t, i) => (
                <li key={i} className="list-unstyled">
                    <input onChange={handleToggleTag(t._id)} checked={findOutTag(t._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">{t.name}</label>
                </li>
            ))
        )
    }

    const handleBody = e => {
        setBody(e);
        formData.set('body', e);
    }

    const editBlog = (e) => {
        e.preventDefault()
        updateBlog(formData, token, router.query.slug).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({ ...values, title: '', success: `Blog titled "${data.title}" is successfully updated` })
                if (isAuth() && isAuth().role === "admin") {
                    // Router.replace(`/admin/crud/${router.query.slug}`)
                    Router.replace(`/blogs/${router.query.slug}`)
                } else if (isAuth() && isAuth().role !== "admin") {
                    Router.replace(`/blogs/${router.query.slug}`)
                }
            }
        })

    }

    const handleChange = name => e => {
        const value = name === 'photo' ? e.target.files[0] : e.target.value
        formData.set(name, value)
        setValues({ ...values, [name]: value, formData: formData, error: '' })

    }

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }} >{error}</div>
    )
    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>{success}</div>
    )


    const updateBlogForm = () => {
        return (
            <form onSubmit={editBlog}>
                <div className="form-group">
                    <label className="text-muted">Title</label>
                    <input type="text" className="form-control" value={title} onChange={handleChange('title')} placeholder="Enter Title" />
                </div>

                <div className="form-group">
                    <ReactQuill
                        modules={QuillModules}
                        formats={QuillFormats}
                        value={body}
                        placeholder="Write something "
                        onChange={handleBody}
                    />
                </div>

                <div>
                    <button className="btn btn-primary" type="submit">Update Blog</button>
                </div>
            </form>
        )
    }



    return (
        <div className="container-fluid my-4">
            {body && (
                <img src={`${API}/blog/photo/${router.query.slug}`} alt={title} className="image image-fluid" style={{ width: '100%' }} />
            )}
            <div className="row my-4">

                <div className="col-md-8">

                    {updateBlogForm()}
                    <div className="py-4">
                        {showError()}
                        {showSuccess()}
                    </div>

                </div>
                <div className="col-md-4">
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


export default withRouter(BlogUpdate);