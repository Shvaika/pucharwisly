// import { GraphQLClient } from 'graphql-request';
// import { gql } from 'graphql-request';

// const hygraph = new GraphQLClient(
//   'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clr82i1dt043r01wadskebz7p/master',
//   {
//     headers: {
//       Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1qYzFORUUzTUVaQk9EZzBNVGsyT1RVME1VTTRSa1ZEUkRRNFFVRkJOVVpHUmtaRk0wWkNRZyJ9.eyJodHRwczovL2dyYXBoY21zLmNvbS9sb2dpbnNDb3VudCI6MSwiaHR0cHM6Ly9ncmFwaGNtcy5jb20vZmxhZ3MiOnt9LCJpc3MiOiJodHRwczovL2F1dGguaHlncmFwaC5jb20vIiwiYXVkIjoiOFZXU2R5VWh0WlQ0M25BaXByMmZqS1JoakptcDhzWXkiLCJpYXQiOjE3MDQ5MDg0MTAsImV4cCI6MTcwNTUxMzIxMCwic3ViIjoiZ2l0aHVifDgzNDc1MTE4Iiwic2lkIjoiWnpwSU1ubk15eXl1NVhfRVY2VDVaS1hzbVVEaDJ2Tm0iLCJub25jZSI6InRmMU1GTVVBb0dmdG5UeWouSkNHen5rS3VvTnZRMzhRIn0.gJbioZMwBFrHNGVEaAZGCKqlPmGwOiPQUN86ThTERY0WGQDje5oY0cFiWBw-lqZZ9BA3qcHwgsc3vkQyD9jkgp4m5t8kFhfqxB-WcrgOnuvdgIJF92tVMaI-3hfXvtP7Xq8yP7lruRQxIWFi6yRs1eM0_D-WKImREWafsEL_ZNKZxxQRN4OMGrIgnkIXA_FXUgV6XS0j28s0iUKhmsCz7v1xxiuPUIwvwgSX_94BK511LR3U0JIubtGCAFY_CO3AaAemaBB0AIzv91dkfkB-zue3xmVsCSrxiu46FZTvD5VUCz-6NwQ7HrDct9sQu8J7c3Xmacw9z6M3fcNhU_vouQ'
//     }
//   }
// );

// const QUERY = gql`
//   {
//   komunikaty {
//     createdAt
//     date
//     id
//     publishedAt
//     title
//     updatedAt
//   }
// `

// export async function getStaticProps() {
//   const { komunikaty } = await hygraph.request(QUERY)

//   return {
//     props: {
//       komunikaty
//     }
//   }
// }

// export const Komunikaty = ({ komunikaty }) => {
//     return (<ul>
//     {komunikaty.map(({ id, title }) => (
//       <li key={id}>{title}</li>
//     ))}
//   </ul>)
// }
  