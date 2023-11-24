import { IType } from '@/types/pokemon.type';
import { cn } from '@/utils/styles.utils';
import { VariantProps, cva } from 'class-variance-authority';

const tagVariants = cva(
  'rounded-lg p-1 font-bold text-lg w-20 tracking-wider text-center text-neutral-800',
  {
    variants: {
      variant: {
        poison: 'bg-violet-700',
        fire: 'bg-red-600',
        grass: 'bg-emerald-600',
        flying: 'bg-sky-600',
        water: 'bg-blue-700',
        fighting: 'bg-orange-700',
        psychic: 'bg-fuchsia-700',
        electric: 'bg-yellow-300',
        normal: 'bg-neutral-200',
        bug: 'bg-lime-400',
        ground: 'bg-amber-800',
        fairy: 'bg-fuchsia-300',
        rock: 'bg-stone-400',
        ice: 'bg-indigo-300',
        ghost: 'bg-indigo-800',
      },
    },
  }
);

type Props = {
  types: IType[];
};

type Variant = VariantProps<typeof tagVariants>['variant'];

const PokemonTypeTag = ({ types }: Props) => {
  return (
    <>
      {types.map((t) => (
        <p
          key={t._id}
          className={cn(tagVariants({ variant: t.name as keyof Variant }))}
        >
          {t.name}
        </p>
      ))}
    </>
  );
};

export default PokemonTypeTag;
