import axios from 'axios'

class BookService{
    baseUrl ="http://localhost:8081/addressbook";

    addAddressBook(data){
        return axios.post(`${this.baseUrl}/create`,data)
    }

    getAllAddressBook() {
        return axios.get(`${this.baseUrl}/get`);
    }

    getAddressBookById(id){
        return axios.get(`${this.baseUrl}/get/${id}`)
    }

    deleteAddressBook(id){
        return axios.delete(`${this.baseUrl}/delete/${id}`)
    }

    updateAddressBook(id, data){
        return axios.put(`${this.baseUrl}/update/${id}`, data);
    }

}

export default new BookService();