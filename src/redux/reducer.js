const appState = {
  contentData: {
    loading: false,
    data: {} ,
    uni:{},
    faculty:[],
    testimony:[]
  }
}

const app = (state = { ...appState }, action) => {
  switch (action.type) {
    case "FETCH_API":
      
      return {
        ...state,
        contentData: {
          ...state.contentData,
          loading: true,
        },
      };
    case "FETCH_API_SUCCESS":
      // console.log(action.payload)
      return {
        ...state,
        contentData: {
          ...state.contentData,
          data: action.payload,
          loading: false,
        },
      };
    case "FETCH_API_FAILED":
      return {
        ...state,
        contentData: {
          ...state.contentData,
          loading: false,
        },
      };
    case "FETCH_UAPI_SUCCESS":
      // console.log(action.payload)
      return {
        ...state,
        contentData: {
          ...state.contentData,
          uni: action.payload,
          loading: false,
        },
      };
    case "FETCH_UAPI_FAILED":
      return {
        ...state,
        contentData: {
          ...state.contentData,
          loading: false,
        },
      };
      case "FETCH_TAPI_SUCCESS":
      console.log(action.payload)
      return {
        ...state,
        contentData: {
          ...state.contentData,
          testimony: action.payload,
          loading: false,
        },
      };
    case "FETCH_TAPI_FAILED":
      return {
        ...state,
        contentData: {
          ...state.contentData,
          loading: false,
        },
      };
      case "FETCH_FAPI_SUCCESS":
        console.log(action.payload)
        return {
          ...state,
          contentData: {
            ...state.contentData,
            faculty: action.payload,
            loading: false,
          },
        };
      case "FETCH_FAPI_FAILED":
        return {
          ...state,
          contentData: {
            ...state.contentData,
            loading: false,
          },
        };
      default:
        return state;
  }
};

export default app;
