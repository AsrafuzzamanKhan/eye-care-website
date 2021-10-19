import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import img from '../../../../images/login/login.jpg'


const Login = () => {
    const { signInUsingGoogle, handlePasswordChange, error, toggleLogin, handleEmailChange, isLogin, handleRegistration, setLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home'




    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri)

            })
            .finally(() => setLoading(false))
    }




    return (
        <div className="">
            <div className="container p-5">
                <div className="row d-flex align-items-center bg-light shadow-lg p-3">
                    <div className="col-lg-6 col-sm-12">
                        <img className="img-fluid p-3" src={img} alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <form onSubmit={handleRegistration} className="row">
                            <div className="w-100 p-5 border shadow-lg ">
                                <h5 className="mb-4 text-center">Please {isLogin ? 'Login' : 'Register'}</h5>
                                <div className="mb-3">
                                    <input onBlur={handleEmailChange} type="email" className="form-control" placeholder="Email" required />
                                </div>
                                <div className="mb-3">
                                    <input onBlur={handlePasswordChange} type="password" className="form-control" placeholder="Password" required />
                                </div>

                                <div className="mb-3">{error}</div>

                                <div class="form-check">
                                    <input onChange={toggleLogin} class="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label class="form-check-label" for="gridCheck1">
                                        Already registered?
                                    </label>
                                </div>

                                <div className="col-12">
                                    <button onClick={handleRegistration} type="submit" className="btn btn-primary mt-3 w-100">{isLogin ? 'Login' : 'Register'}</button>
                                </div>
                                <h6 className="text-center">or</h6>
                                <button onClick={handleGoogleLogin} className="btn btn-primary w-100">Google Sign In</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;



