import qgl from "graph-tag";

export const GET_ME = gql `
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            image
            link
            title
            description
        }
    }
}`