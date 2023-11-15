
import React from "react";

function Spinner(){
    return(
        <div className="flex flex-col items-center justify-center space-y-2">
            <div class="custom-loader"></div>
            <p className="text-bgDark text-lg font-semibold">Loading</p>
        </div>
    );
}

export default Spinner;