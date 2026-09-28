import React from "react"
import SectionLabel from "../components/SectionLabel"
import MasterButton from "../components/MasterButton"
import Corners from "../components/Corners"

export default function NotFoundPage() {
    return (
        <div className="not-found-page-root">
            <div className="not-found-card">
                <SectionLabel>404 Error</SectionLabel>
                <div className="not-found-number-frame">
                    <span className="not-found-big-text">404</span>
                    <Corners variant="all" />
                </div>
                <h1 className="not-found-heading">This frame is out of focus</h1>
                <p className="not-found-body">
                    The page or project you requested may have been relocated, archived, or does not exist.
                </p>
                <div className="not-found-actions">
                    <MasterButton to="/" variant="dark">
                        Return home
                    </MasterButton>
                    <MasterButton to="/portfolio" variant="light">
                        Browse portfolio
                    </MasterButton>
                </div>
            </div>
        </div>
    )
}