import { Controller, Get, HttpCode, Param, Redirect, Res } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(200)
  findAll(): string {
    return 'This is a cat';
  }

  @Get('/express')
  findAllExpress(@Res() response): string[] {
    return response.status(200).json({ data: 'Fetching using express' });
  }

  @Get('/redirect')
  @Redirect('https://nestjs.com', 301)
  redirect(): void {}

  @Get(':id')
  getCatWithId(@Param() params: any): string {
    console.log(params);
    return `this is cat number ${params.id}`;
  }
}
