"use strict";

import React, { Component, PropTypes } from "react";


export default class ActivityDescription extends Component {

    constructor(props) {
        super(props);

        this.styles = {
            modelLink: {
                borderWidth: "2px"
            }
        };
    }

    render() {
        let { item, description } = this.props;

        return (
            <div className="flex-full">
                <div className="">
                    <div className="float-left text-grey-4">
                        <span className="text-dark">{item.user.first_name}</span>
                        &nbsp;{description.subject}&nbsp;
                        { description.subjectRefLink ?
                            <a className="link text-dark" href={description.subjectRefLink}>{description.subjectRefName}</a>
                        :
                            null
                        }
                    </div>
                    <div className="text-right text-grey-2">
                        {item.timestamp.fromNow()}
                    </div>
                </div>
                { description.body ?
                    <div style={this.styles.modelLink} className="bordered rounded p2 mt1">
                        <a className="link" href={description.bodyLink}>{description.body}</a>
                    </div>
                :
                    null
                }
            </div>
        );
    }
}
