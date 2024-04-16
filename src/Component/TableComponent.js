import { Table, Image } from "react-bootstrap";
import "./TableComponent.css";
import { NavbarSection } from "./Navbar";
import { useTable, hasMore } from "../context/TableContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { FilterSection } from "./Filter";

export const TableSection = () => {
    const { filterText, fetchedData, hasMore } = useTable();
    return (
        <>
            <NavbarSection />
            <div className="main-container">
                <FilterSection />
                <Table responsive="lg" striped bordered hover>
                    <thead>
                        <tr>
                            <th>CD Rank</th>
                            <th>Colleges</th>
                            <th>Course Fees</th>
                            <th>Placement</th>
                            <th>User Reviews</th>
                            <th>College dunia Ratings</th>
                        </tr>
                    </thead>
                    <InfiniteScroll
                        dataLength={filterText.length}
                        next={fetchedData}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        scrollableTarget="scrollableDiv"

                    />
                    <tbody>
                        {filterText.map((item, index) => (
                            <tr key={index}>
                                <td className="item-id">
                                    #{item.id}
                                </td>
                                <td>
                                    {item.featured === true ? <div className="featured">featured</div> : null}
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <Image src={item.logo} width={70} roundedCircle />
                                        <div className="college-details">
                                            <a
                                                href="https://collegedunia.com/university/25703-iit-bombay-indian-institute-of-technology-iitb-mumbai"
                                                className="college-name"
                                            >
                                                {item.collegeName}</a>
                                            <br />
                                            <span>{item.address}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="course-fees">
                                    <a
                                        href="https://collegedunia.com/university/25703-iit-bombay-indian-institute-of-technology-iitb-mumbai"
                                    >

                                        &#8377; {item.courseFees}</a>
                                </td>
                                <td>
                                    <div className="package">
                                        <a href="https://collegedunia.com/university/25703-iit-bombay-indian-institute-of-technology-iitb-mumbai" class="package-number">&#8377; {item.palcement.averagePkg}</a>
                                        <br />
                                        <a href="https://collegedunia.com/university/25703-iit-bombay-indian-institute-of-technology-iitb-mumbai" class="package-text">Average Package</a>
                                    </div>
                                    <br />
                                    <div className="package">
                                        <a href="https://collegedunia.com/university/25703-iit-bombay-indian-institute-of-technology-iitb-mumbai" class="package-number">&#8377; {item.palcement.heighestPkg}</a>
                                        <br />
                                        <a href="https://collegedunia.com/university/25703-iit-bombay-indian-institute-of-technology-iitb-mumbai" class="package-text">Heighest Package</a>
                                    </div>
                                </td>
                                <td>
                                    <div className="review-container">
                                        <div className="dot"></div>
                                        <div className="review-data-text">{item.userReview} / 10</div>
                                    </div>
                                </td>
                                <td className="collegedunia-rating">{item.collegeduniarating} / 10</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        </>
    )
}