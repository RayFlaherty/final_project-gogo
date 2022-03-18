import qgl from "graph-tag";

export const LOGIN_USER = gql `
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password){
            token
            user {
                _id
            }
        }
    }
    `;

    export const ADD_USER= gql`
    mutation addUser ($username: String!, $email: String!, $password: String!) {
        addUser($username: String!, $email: String!, $password: String!){
            token
            user {
                _id
                username
            }
        }
    }
    `;

    export const SAVE_BOOK =gql`
        mutation saveBook($input: savedBook!) {
            saveBook (input: $input) {
                _id
                username
                email
                bookCount
                savedBooks {
                    #_id
                    bookId
                    authors
                    image
                    link
                    title
                    description
                }
            }
        }
    `;

    export const REMOVE_BOOK = gql `
    mutation removeBook ($bookId: ID!) {
        removeBook(bookID: $bookId) {
            _id
            username
            email
            bookCount
            savedBooks {
                #_id
                bookId
                authors
                image
                link
                title
                description
            }
        }
    }
    `;