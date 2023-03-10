import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { getAllPostsData, getPostsIDs, getPostData } from '@/lib/poemLib'
import { ParsedUrlQuery } from 'querystring';

function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    // will resolve posts to type Post[]
    console.log(posts);

}


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getPostsIDs();
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const postData = await getPostData(params.id);
    return {
        props: {
            posts: postData
        },
    }
}

export default Blog