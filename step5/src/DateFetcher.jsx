import React from 'react';
import axios from 'axios';

class DateFetcher extends React.Component {
    state = {
        data: null
    }
    componentDidMount() {
        const { url, parseData } = this.props;
        axios(url).then(response => {
            const data = parseData(response.data);
            this.setState({ data });
        });
    }

    render() {
        const { children } = this.props;
        const { data } = this.state;
        if ( data === null ) {
            return <p>데이터로딩중...</p>;
        } else {
            return children({ data });
        }
    }
}

export default function DateComponent() {
    return (
        <DateFetcher
            url="https://api.github.com/repos/bytrustu/StudySibaReborn"
            parseData={parseRepoData}
        >
            {({ data }) => (
                <div>
                    <p>{`name: ${data.name}`}</p>
                    <p>{`stars: ${data.stars}`}</p>
                    <p>{`open issues: ${data.openIssue}`}</p>
                </div>
            )}

        </DateFetcher>
    )
}

function parseRepoData(data) {
    return {
        name: data.name,
        stars: data.stargazers_count,
        openIssue: data.open_issues,
    };
}