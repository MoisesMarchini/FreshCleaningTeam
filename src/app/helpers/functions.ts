/**
 * Gera uma lista de nomes de arquivo com base no nome base, quantidade desejada e tipo de arquivo.
 * Esta função é para gerar os caminhos para os arquivos na pasta '/assets'
 *
 * @param baseFilename O nome base do arquivo.
 * @param amount A quantidade de nomes de arquivo a serem gerados.
 * @param filetype O tipo de arquivo (por exemplo, 'jpg', 'png', etc.).
 * @param startAt Indica o índice do primeiro elemento. Por padrão, começa em um.
 * @returns Uma array contendo os nomes de arquivo gerados.
 */
export function getFilenamesArray(
  baseFilename: string,
  amount: number,
  filetype: string,
  startAt: number = 1
) {
  const filenamesArray: string[] = [];

  for (let i = startAt; i <= amount; i++) {
    const filename = `${baseFilename} (${i}).${filetype}`;
    filenamesArray.push(filename);
  }

  return filenamesArray;
}
