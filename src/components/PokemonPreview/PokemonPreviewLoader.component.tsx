import { Skeleton } from '../ui/skeleton';

const PokemonPreviewLoader = () => {
  return (
    <div className='w-full container'>
      <section className='grid grid-cols-5 gap-4 justify-items-center items-center'>
        {Array(15)
          .fill(Math.random())
          .map((item) => {
            return (
              <article
                key={`${Math.random()}-${Date.now()}`}
                className='bg-background/10 w-full h-auto rounded-lg flex flex-col items-center gap-4'
              >
                <Skeleton className='h-10 w-32' />
                <Skeleton className='w-full h-64 rounded-sm' />
                <section className={`w-full flex p-4 justify-between`}>
                  {Array(2)
                    .fill(Math.random())
                    .map((t) => (
                      <Skeleton
                        key={`${Math.random()}-${Date.now()}`}
                        className='rounded-md h-10 w-20'
                      />
                    ))}
                </section>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PokemonPreviewLoader;
