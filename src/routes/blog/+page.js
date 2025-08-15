export async function load({fetch}) {
    // const endpoint = "https://jsonplaceholder.typicode.com/posts"

    const endpoint = "https://public-api.wordpress.com/rest/v1.1/sites/blog16965.wordpress.com/posts/"

    const response = await fetch(endpoint)
    const posts = await response.json()

    return {
        posts,
    }
}