import axios from "axios";
import {useState ,useEffect, ReactChild, ReactFragment, ReactPortal } from "react";


export default function Comm({posts}: any) {
    return(
        <div>
        {posts && posts.map((item: { title: boolean | string | null | undefined, id: number }) => {
        <h1 key={item.id}>title: {item.title}</h1>;
    })}
        </div>
    );


}


export async function getStaticProps() {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return{
        props: 
        {posts}
    }
    
};