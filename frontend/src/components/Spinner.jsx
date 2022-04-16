function Spinner() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-dark opacity-25 vh-100">
      <div className="spinner-grow text-primary h-25 w-25" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
   </div>
  )
}

export default Spinner