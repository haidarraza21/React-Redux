function AddIteam({ todoName, todoDate }) {

    return <div class="container text-center">
        <div class="row justify-content-md-center kg-row">
            <div class="col col-lg-2 name" > {todoName} </div>
            <div class="col-md-auto">{todoDate}</div>

            <div class="col col-lg-2">
                <button type="button" class="btn btn-danger kg-row">Delete</button>
            </div>
        </div>
    </div>
}
export default AddIteam;