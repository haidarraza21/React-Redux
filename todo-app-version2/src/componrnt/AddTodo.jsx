function AddTodo() {
    return <div class="container text-center">
        <div class="row justify-content-md-center">
            <div class="col col-lg-2">
                <input type="text" placeholder="Enter Todo here" />
            </div>
            <div class="col-md-auto">
                <input type="date" />
            </div>
            <div class="col col-lg-2">
                <button type="button" class="btn btn-success" id="add-button">Add</button>
            </div>
        </div>
    </div>


}
export default AddTodo;