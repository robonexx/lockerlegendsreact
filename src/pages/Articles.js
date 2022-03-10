import React from 'react'
import './Articles.scss'
import ResponsiveGrid from '../components/ResponsiveGrid/ResponsiveGrid'


const Articles = () => {

    return ( 

        <div className="articles-page">
            <section className="art-section">
               <h1>Articles</h1>
            </section>
            <ResponsiveGrid />
        </div>

     );
}
 
export default Articles;