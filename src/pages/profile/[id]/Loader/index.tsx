import Box from 'components/Box';
import Skeleton from 'components/Skeleton';
import Section from '../Section';

const ProfileLoader = () => (
  <>
    <Section>
      <Skeleton
        ready={false}
        count={1}
        SkeletonItem={{
          width: 19,
          height: 19,
          variant: 'circular',
        }}
      />
    </Section>

    <Section>
      <Skeleton
        ready={false}
        count={1}
        SkeletonItem={{
          width: 30,
          variant: 'text',
        }}
      />
      <Skeleton
        ready={false}
        count={1}
        SkeletonItem={{
          width: 20,
          variant: 'text',
        }}
      />
      <Skeleton
        ready={false}
        count={1}
        SkeletonItem={{
          width: 25,
          variant: 'text',
        }}
      />
      <Skeleton
        ready={false}
        count={1}
        SkeletonItem={{
          width: 28,
          variant: 'text',
        }}
      />
      <Skeleton
        ready={false}
        count={1}
        SkeletonItem={{
          width: 20,
          variant: 'text',
        }}
      />
    </Section>

    <Section>
      <Skeleton
        ready={false}
        count={1}
        SkeletonItem={{
          width: 15,
          height: 5,
          variant: 'text',
        }}
      />

      <Box marginTop={3}>
        <Skeleton
          ready={false}
          count={1}
          SkeletonItem={{
            width: 25,
            variant: 'text',
          }}
        />
        <Skeleton
          ready={false}
          count={1}
          SkeletonItem={{
            width: 28,
            variant: 'text',
          }}
        />
        <Skeleton
          ready={false}
          count={1}
          SkeletonItem={{
            width: 18,
            variant: 'text',
          }}
        />
      </Box>

      <Box marginTop={3}>
        <Skeleton
          ready={false}
          count={1}
          SkeletonItem={{
            width: 28,
            variant: 'text',
          }}
        />
        <Skeleton
          ready={false}
          count={1}
          SkeletonItem={{
            width: 19,
            variant: 'text',
          }}
        />
        <Skeleton
          ready={false}
          count={1}
          SkeletonItem={{
            width: 23,
            variant: 'text',
          }}
        />
      </Box>
    </Section>
  </>
);

export default ProfileLoader;
