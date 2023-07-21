const QueryView = ({ query }) => {
    return (
        <div className="query-view-container">
            <h3>Query Details</h3>
            <pre className="query">{query}</pre>
        </div>
    );
};

export default QueryView;
