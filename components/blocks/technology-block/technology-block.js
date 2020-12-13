import styles from './technology-block.module.scss'
import TagList from '../../tag-list'

export default function TechnologyBlock({ data: { block_title, categories } }) {
  return (
    <section className={styles.technologyBlock}>
      {block_title && <h2>{block_title}</h2>}

      {categories?.map((category, index) => (
        <div key={index}>
          {category.category_title && <h4>{category.category_title}</h4>}
          <TagList tags={category.technologies} />
        </div>
      ))}
    </section>
  )
}
