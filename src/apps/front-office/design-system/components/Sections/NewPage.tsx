import NewSection from './NewSection';

// type PropTypes = {
//   page:string,
//   content:string,
//   align:string,
//   links:[]
// }
const NewPage = (props: any) => {
  // if(error || isLoading){
  //     return <ErrorLoader />
  // }

  return (
    <NewSection
      title={props.page}
      helmetTitle={props.page}
      titleOrder={5}
      {...props}
    >
      <p dangerouslySetInnerHTML={{ __html: props.content }} />
    </NewSection>
  );
};

export default NewPage;
