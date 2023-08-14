import { useEffect, useState } from "react";
import SearchResultData from "../../data/searchResultPage";
import { Footer, FavTripCard, Header } from "../../components/Organism";
import {
  CheckBox,
  Select,
  RadioGroup,
  // RangeSlider,
} from "../../components/Molecules";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchResult,
  handleFilterChange,
  searchPageResultSelector,
} from "./reducer";
import imageUrl from "../../images/tripCards/nature/athirappilly.jpeg";
import PageLoading from "../../components/Organism/PageLoading";
// import PropTypes from 'prop-types';

function SearchResultPage() {
  const { filters, destination, stay } = SearchResultData;
  const { key } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchResult(key));
  }, [key, dispatch]);

  const { result, loading, errorMsg, filter } = useSelector(
    searchPageResultSelector
  );
  const [tripsData, setTripData] = useState(result || []);

  useEffect(() => {
    if (result) setTripData(result);
  }, [result]);

  useEffect(() => {
    const {
      theme,
      duration,
      weather,
      country,
      city,
      accommodation,
      activities,
    } = filter;
    const newData = result.filter(({ tripTags }) => {
      if (theme && !tripTags.includes(theme)) return false;
      if (weather && !tripTags.includes(weather)) return false;
      if (duration && !tripTags.includes(duration)) return false;
      if (country && !tripTags.includes(country)) return false;
      if (city && !tripTags.includes(city)) return false;
      if (accommodation.length > 0) {
        return accommodation.some((itm) => tripTags.includes(itm));
      }
      if (activities.length > 0) {
        return activities.some((itm) => tripTags.includes(itm));
      }
      return true;
    });
    setTripData(newData);
  }, [filter, result]);

  const handleSelect = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    dispatch(handleFilterChange({ name: name, value: value }));
  };
  return (
    <div>
      <Header customStyles="shadow-md bg-white" showSearch />
      <div className="flex gap-x-2 py-4">
        <div
          className="basis-[220px] drop-shadow-lg 
        my-4 shadow-lg rounded-lg h-fit p-4 border onlyMobile:hidden"
        >
          <div>
            {filters.map(({ id, title, filter }) => (
              <RadioGroup
                key={id}
                label={title}
                options={filter}
                handleSelect={handleSelect}
              />
            ))}
            {/* <RangeSlider /> */}
            {destination.map(({ id, label, options }) => (
              <Select
                key={id}
                id={id}
                options={options}
                label={label}
                onChange={handleSelect}
              />
            ))}
            {stay.map(({ id, label, options }) => (
              <CheckBox
                key={id}
                id={id}
                label={label}
                options={options}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </div>
        <div className="flex-1">
          {loading ? (
            <PageLoading />
          ) : tripsData?.length > 0 ? (
            tripsData?.map(
              ({ _id, tripName, mdDescription, likes, review, cardImage }) => (
                <FavTripCard
                  key={_id}
                  id={_id}
                  title={tripName}
                  description={mdDescription}
                  likesCount={likes}
                  image={cardImage || imageUrl}
                  review={review}
                  // showDelete={true}
                  // handleDelete={(e) => handleDeleteFavTrips(e, _id)}
                  path={"/trip/" + _id}
                />
              )
            )
          ) : (
            <div className="text-h1 flex justify-center items-center h-40">
              {errorMsg || "No Trips Found !"}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

SearchResultPage.propTypes = {};

export default SearchResultPage;
