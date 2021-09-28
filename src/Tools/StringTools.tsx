export const TitleTrimmer = (word: string, length: number) => {

    const output_word = word.length < length ? word : word.slice(0,length) + "..."

    return output_word
}