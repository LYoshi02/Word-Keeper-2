import React, { Component } from 'react';
import Swal from "sweetalert2";

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {
        constructor(props) {
            super(props)

            this.reqInterceptor = axios.interceptors.request.use(req => {
                return req;
            })

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                Swal.fire({
                    title: error.message,
                    icon: "error"
                });
            });
        }
        
        componentWillUnmount() {
            console.log("will unmount", this.reqInterceptor, this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        render() {
            return(
                <React.Fragment>  
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            )
        }
    }
}

export default withErrorHandler;