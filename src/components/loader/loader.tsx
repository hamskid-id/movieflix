import { useState } from "react";
import DotLoader from "react-spinners/DotLoader";
const Spinner = () => {

    return (
        <div className="loader">
            <div className="loader-inner">
                <DotLoader
                    color="green"
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                <br />
                <p className="text-white">Please wait...</p>
            </div>
        </div>
    );
};

export default Spinner;